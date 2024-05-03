from flask import Flask, render_template, request, redirect, url_for

app = Flask(__name__)

# Dummy user profile data (replace with database integration)
user_profile = {
    'username': 'JohnDoe',
    'email': 'johndoe@example.com',
    'profile_picture': 'default_profile.jpg'  # File path or URL to profile picture
}

class UserProfile:
    def __init__(self, username, email, profile_picture):
        self.username = username
        self.email = email
        self.profile_picture = profile_picture

@app.route('/profile', methods=['GET'])
def view_profile():
    return render_template('profile.html', user_profile=user_profile)

@app.route('/profile/edit', methods=['GET', 'POST'])
def edit_profile():
    if request.method == 'POST':
        # Update user profile with form data
        user_profile['username'] = request.form['username']
        user_profile['email'] = request.form['email']
        # Handle profile picture upload if needed

        # Redirect to profile confirmation page
        return redirect(url_for('profile_confirmation'))

    # Render profile edit form with current profile data
    return render_template('profile_edit.html', user_profile=user_profile)

@app.route('/profile/confirmation')
def profile_confirmation():
    return render_template('profile_confirmation.html', user_profile=user_profile)

if __name__ == '__main__':
    app.run(debug=True)
