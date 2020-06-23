
import numpy as np, from flask_mysqldb import MySQL
from flask import Flask, request, jsonify, render_template
import pickle


app = Flask(__name__)
model = pickle.load(open('model1.pkl', 'rb'))

# Configure db
app.config['MYSQL_HOST'] = 'drvintel.cqw3h9hlecdi.ap-south-1.rds.amazonaws.com'
app.config['MYSQL_USER'] = 'drvintel'
app.config['MYSQL_PASSWORD'] = 'drvintel123'
app.config['MYSQL_DB'] = 'drvintel'

# mysql = MySQL(app)
# cur = mysql.connection.cursor()
# cur.execute("SELECT* FROM DataLake1")
# Data = cur.fetchall()

@app.route('/')
def home():
    mysql = MySQL(app)
    cur = mysql.connection.cursor()
    cur.execute("SELECT* FROM DataLake1")
    Data = cur.fetchall()
    print(Data)

    return render_template('index1.html')


@app.route('/result', methods = ['POST'])
def result():
    if request.method == 'POST':
        float_features = [float(x) for x in request.form.values()]
        final_features = [np.array(float_features)]
        # to_predict_list = request.form.to_dict()
        # to_predict_list = list(to_predict_list.values())
        # to_predict_list = list(map(int, to_predict_list))
        result = model.predict(final_features)
        if int(result )== 0:
            prediction ='VERY GOOD'
        elif int(result) == 1:
            prediction = 'GOOD'
        elif int(result) == 2:
            prediction = 'AVERAGE'
        elif int(result) == 3:
            prediction = 'BAD'
        else:
            prediction = 'VERYBAD'

        return render_template("index1.html", prediction_text=prediction)


if __name__ == '__main__':
    app.run(use_reloader=False,host='0.0.0.0',port=5000)

