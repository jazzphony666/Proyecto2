from flask import Flask, render_template, redirect, url_for, request, session
from flask_wtf import FlaskForm
from wtforms import StringField, PasswordField, validators
import sqlite3
import os

app = Flask(__name__)
app.secret_key = os.urandom(24)

# Configuración de la base de datos
DATABASE = 'usuarios.db'

def create_table():
    conn = sqlite3.connect(DATABASE)
    cur = conn.cursor()
    cur.execute('CREATE TABLE IF NOT EXISTS usuarios (id INTEGER PRIMARY KEY, username TEXT, password TEXT)')
    conn.commit()
    conn.close()

# Formulario de registro
class RegistroForm(FlaskForm):
    username = StringField('Usuario', [validators.DataRequired()])
    password = PasswordField('Contraseña', [
        validators.DataRequired(),
        validators.EqualTo('confirm_password', message='Las contraseñas deben coincidir')
    ])
    confirm_password = PasswordField('Confirmar Contraseña')

# Ruta de inicio
@app.route('/')
def inicio():
    return 'Bienvenido al sitio.'

# Ruta de registro
@app.route('/registro', methods=['GET', 'POST'])
def registro():
    form = RegistroForm(request.form)
    if request.method == 'POST' and form.validate():
        username = form.username.data
        password = form.password.data

        conn = sqlite3.connect(DATABASE)
        cur = conn.cursor()
        cur.execute('INSERT INTO usuarios (username, password) VALUES (?, ?)', (username, password))
        conn.commit()
        conn.close()

        return redirect(url_for('inicio'))

    return render_template('registro.html', form=form)

# Ruta de inicio de sesión
@app.route('/login', methods=['GET', 'POST'])
def login():
    if request.method == 'POST':
        username = request.form['username']
        password = request.form['password']

        conn = sqlite3.connect(DATABASE)
        cur = conn.cursor()
        cur.execute('SELECT * FROM usuarios WHERE username = ? AND password = ?', (username, password))
        user = cur.fetchone()
        conn.close()

        if user:
            session['username'] = username
            return redirect(url_for('inicio'))
    
    return render_template('login.html')

# Ruta de cierre de sesión
@app.route('/logout')
def logout():
    session.pop('username', None)
    return redirect(url_for('inicio'))

if __name__ == '__main__':
    create_table()
    app.run(debug=True)
