import pickle
from flask import Flask,render_template,request, jsonify
import numpy as np
from sklearn.preprocessing import MinMaxScaler
import pandas as pd

app = Flask(__name__)

#open pickle file
model_adm = pickle.load(open('/workspaces/Hack_Horizons/ml model/flask/model_adm.pickle','rb'))
scaler_adm = pickle.load(open('/workspaces/Hack_Horizons/ml model/flask/scaler_adm.pickle','rb'))
model_plm = pickle.load(open('/workspaces/Hack_Horizons/ml model/flask/model_plm.pickle','rb'))
scaler_plm = pickle.load(open('/workspaces/Hack_Horizons/ml model/flask/scaler_plm.pickle','rb'))

columns_plm = ['ssc_p', 'hsc_p', 'degree_p', 'etest_p', 'mba_p', 'gender_M', 'ssc_b_Others',
               'hsc_b_Others', 'hsc_s_Commerce', 'hsc_s_Science', 'degree_t_Others',
               'degree_t_Sci&Tech', 'workex_Yes', 'specialisation_Mkt&HR']


# prediction function for admission
def predict_adm(x):
  x = np.array(x).reshape(1,-1)
  x = scaler_adm.transform(x)
  y = model_adm.predict(x)
  return y[0]

@app.route('/adm')
def home_adm():
    return render_template('home_adm.html')

# prediction function for Admission

@app.route('/predict_admission', methods=['POST'])
def predict_admission():
    # retrieve form data
    input_features = [float(x) for x in request.form.values()]

    # generate prediction
    prediction = predict_adm(input_features)

    # display result
    return render_template('result_adm.html', prediction=prediction)


@app.route('/predict_admission_api', methods=['POST'])
def predict_admission_api():
    # retrieve input data from request
    input_data = request.get_json()
    # retrieve form data
    input_features = [float(x) for x in input_data.values()]

    # generate prediction
    prediction = predict_adm(input_features)
    output = {'prediction': prediction}
    return jsonify(output)


@app.route('/plm')
def home_plm():
    return render_template('home_plm.html')

# prediction function for Placement

@app.route('/predict_placement', methods=['POST'])
def predict_placement():
    form_data = request.form.to_dict()
    # Create a pandas DataFrame from the form data
    df = pd.DataFrame([form_data])
    # Convert the categorical variables to one-hot encoded variables
    df = pd.get_dummies(df, columns=['gender', 'ssc_b', 'hsc_b', 'hsc_s', 'degree_t', 'workex','specialisation'], drop_first=True)
    # Reorder the columns to match the order in the training data
    df = df.reindex(columns=columns_plm, fill_value=0)
    # Convert the data to a numpy array
    X = np.array(df)
    # Make a prediction
    X = scaler_plm.transform(X)
    prediction = model_plm.predict(X)[0]
    
    return render_template('result_plm.html', prediction=prediction)


if __name__ == '__main__':
    app.run(debug=True)
