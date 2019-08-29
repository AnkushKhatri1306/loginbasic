from django.contrib.auth.models import User

def user_signup(request):
    try:
        post_data = request.data
        obj = User()
        obj.first_name = post_data.get('first_name')
        obj.last_name = post_data.get('last_name')
        obj.email = post_data.get('email')
        obj.username = post_data.get('email')
        obj.set_password(post_data.get('password'))
        obj.save()
        return {'status': 'success', 'msg': 'Success in Signup'}
    except Exception as e:
        print(e.args)
        return {'status': 'error', 'msg': 'Error in signup'}

def get_user_data(request):
    try:
        data = {}
        data['first_name'] = request.user.first_name
        data['last_name'] = request.user.last_name
        data['email'] = request.user.email
        data['username'] = request.user.username
        data['id'] = request.user.id
        return {'status': 'success', 'msg': 'Success in getting data', 'data': data}
    except Exception as e:
        print(e.args)
        return {'status': 'error', 'msg': 'Error in getting data', 'data': {}}