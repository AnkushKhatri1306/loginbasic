from rest_framework.response import Response
from .controllers import *
from rest_framework import status
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated

# Create your views here.

@api_view(['POST'])
def user_signup_details(request):
    try:
        data = user_signup(request)
        return Response(data=data, status=status.HTTP_200_OK)
    except Exception as e:
        print(e.args)


@api_view(['GET'])
@permission_classes([IsAuthenticated])
def get_user_details(request):
    try:
        data = get_user_data(request)
        return Response(data=data, status=status.HTTP_200_OK)
    except Exception as e:
        print(e.args)