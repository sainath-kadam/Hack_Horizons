import pickle
from flask import Flask,render_template,request
import numpy as np
from sklearn.preprocessing import MinMaxScaler

app = Flask(__name__)

#open pickle file
model_adm = pickle.load(open('/workspaces/Hack_Horizons/ml model/flask/model_adm.pickle','rb'))
scaler_adm = pickle.load(open('/workspaces/Hack_Horizons/ml model/flask/scaler_adm.pickle','rb'))

# prediction function
def predict_adm(x):
  x = np.array(x).reshape(1,-1)
  x = scaler_adm.transform(x)
  y = model_adm.predict(x)
  return y[0]

@app.route('/adm')
def home_adm():
    return render_template('home_adm.html')

# prediction function

@app.route('/predict', methods=['POST'])
def predict_admission():
    # retrieve form data
    input_features = [float(x) for x in request.form.values()]

    # generate prediction
    prediction = predict_adm(input_features)

    # display result
    return render_template('result_adm.html', prediction=prediction)

if __name__ == '__main__':
    app.run(debug=True)
