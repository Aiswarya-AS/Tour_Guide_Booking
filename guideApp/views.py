from rest_framework.decorators import api_view
from rest_framework.response import Response
from userApp.models import Guide
import jwt
from userApp.serializer import GuideSerializer
from userApp.models import Request
from userApp.serializer import RequestSerializer
# Create your views here.


@api_view(['POST'])
def guideSignup(request):
    try:
        first_name = request.data['first_name']
        last_name = request.data['last_name']
        email = request.data['email']
        phone = request.data['phone']
        place = request.data['place']
        pincode = request.data['pincode']
        language = request.data['language']
        password = request.data['password']
    except Exception:
        return Response({'status': 'Plese provide all the details'})
    guide = Guide.objects.create(
        firstname=first_name,
        lastname=last_name,
        phone=phone,
        email=email,
        pincode=pincode,
        place=place,
        languages_known=language,
        password=password

    )
    guide.save()
    return Response({'status': 'true'})


@api_view(['POST'])
def guideLogin(request):
    try:
        email = request.data['email']
        password = request.data['password']
    except Exception:
        return Response({'status': 'Please provide all the details..'})
    try:
        guide = Guide.objects.get(email=email, password=password)
        payload = {
                'email':  guide.email,
                'password': guide.password,
                'username': guide.username
            }
        guide_id = guide.id
        jwt_token = jwt.encode(payload, 'secret', algorithm='HS256')
        return Response({'status': 'true',
                        'guide_jwt': jwt_token, 'guide_id': guide_id})
    except Guide.DoesNotExist:
        return Response({'status': 'false'})


@api_view(['GET'])
def guide(request, id):
    try:
        user = Guide.objects.get(id=id)
        serializer = GuideSerializer(user, many=False)
        return Response(serializer.data)
    except Guide.DoesNotExist:
        return Response({'status': 'User not found'})


@api_view(['GET'])
def guide_requests(request, id):
    requests = Request.objects.filter(guide=id)
    serializer = RequestSerializer(requests, many=True)
    return Response(serializer.data)


@api_view(['POST'])
def accept(request, id):
    request = Request.objects.get(id=id)
    print(request.id)
    request.status = 'Accepted'
    request.save()
    return Response({'status': 'true'})
