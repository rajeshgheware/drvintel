
import numpy as np
from flask import Flask, request, jsonify, render_template
import pickle

app = Flask(__name__)
model = pickle.load(open('model1.pkl', 'rb'))

@app.route('/')
def home():
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
    app.run()

