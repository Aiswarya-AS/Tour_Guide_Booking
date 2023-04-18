from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import User, Destination, Guide, Request
import jwt
from .serializer import DestinationSerializer, GuideSerializer,\
    UserSerializer, RequestSerializer
from django.db.models import Q
# Create your views here.


@api_view(['POST'])
def user_register(request):
    try:
        firstname = request.data['firstname']
        lastname = request.data['lastname']
        username = request.data['username']
        email = request.data['email']
        phone = request.data['phone']
        password = request.data['password']
    except Exception:
        return Response({'status': 'Please provide all the details..'})
    if User.objects.filter(username=username).exists():
        return Response({'status': 'Username already exists'})
    if User.objects.filter(phone=phone).exists():
        return Response({'status': 'Phone number already exists'})
    if User.objects.filter(email=email).exists():
        return Response({'status': 'Email already exists'})
    user = User.objects.create(
        firstname=firstname,
        lastname=lastname,
        username=username,
        email=email,
        phone=phone,
        password=password
    )
    user.save()
    return Response({'status': 'true'})


@api_view(['POST'])
def user_login(request):
    try:
        email = request.data['email']
        password = request.data['password']
    except Exception:
        return Response({'status': 'Please provide all the details..'})
    try:
        user = User.objects.get(email=email, password=password)
        payload = {
            'email': user.email,
            'password': user.password,
            'username': user.username
        }
        user_id = user.id
        jwt_token = jwt.encode(payload, 'secret', algorithm='HS256')
        return Response({'status': 'true', 'user_jwt': jwt_token,
                        'user_id': user_id})
    except User.DoesNotExist:
        return Response({'status': 'false'})


@api_view(['POST'])
def destination(request):
    query = request.data['search']
    try:
        destination = Destination.objects.filter(Q(country__icontains=query) |
                                Q(state__icontains=query) | Q(location__icontains=query))
        serializer = DestinationSerializer(destination, many=True)
        return Response(serializer.data)
    except Exception:
        return Response({'Not found any place..'})


@api_view(['GET'])
def destination_details(request, id):
    try:
        destination = Destination.objects.get(id=id)
        serializer = DestinationSerializer(destination, many=False)
        return Response(serializer.data)
    except Exception:
        return Response({'Not found any place..'})


@api_view(['GET'])
def guides(request, place):
    # query=request.data['place']
    print(place)
    try:
        guides = Guide.objects.filter(place='Japan')
        serializer = GuideSerializer(guides, many=True)
        return Response(serializer.data)
    except Exception:
        return Response({'Not found any guide..'})


@api_view(['GET'])
def guide_details(request, id):
    try:
        guides = Guide.objects.get(id=id)
        serializer = GuideSerializer(guides, many=False)
        return Response(serializer.data)
    except Exception:
        return Response({'Not found any guide..'})


list1 = [1, 2, 3, 4, 5]
# @api_view(['POST'])
# def guide_request(request):
#     print(request.data)
#     try:
#         guide_id=request.data['guide_id']
#         user_id=request.data['user_id']
#         date=request.data['date']
#         time=request.data['time']
#         total_people=request.data['total_people']
#     except:
#         return Response({'status':'Please provide all the details..'})
#     requested=Request.objects.create(
#         guide=guide_id,
#         user=user_id,
#         date=date,
#         time=time,
#         total_people=total_people
#     )
#     requested.save()
#     return Response({'status':'Requested successfully'})


@api_view(['GET'])
def user_profile(request, id):
    try:
        user = User.objects.get(id=id)
        serializer = UserSerializer(user, many=False)
        return Response(serializer.data)
    except User.DoesNotExist:
        return Response({'status': 'User not found'})


@api_view(['POST'])
def request(request):
    try:
        time = request.data['time']
        date = request.data['date']
        persons = request.data['persons']
        guide_id = int(request.data['guide_id'])
        user_id = request.data['user_id']
        guide_name = request.data['guide_name']
        guide_place = request.data['guide_place']
    except Exception:
        return Response({'status': 'Please provide all the details..'})
    if Request.objects.filter(user=user_id, guide=guide_id).exists():
        return Response({'status': 'exists'})
    else:
        requested = Request.objects.create(
            guide_id=guide_id,
            user_id=user_id,
            date=date,
            time=time,
            total_peoples=persons,
            guide_name=guide_name,
            guide_place=guide_place
        )
        requested.save()
        return Response({'status': 'true'})


@api_view(['GET'])
def user_requests(request, id):
    requests = Request.objects.filter(user=id)
    serializer = RequestSerializer(requests, many=True)
    return Response(serializer.data)
