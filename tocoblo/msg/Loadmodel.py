import numpy as np
import pandas as pd
import matplotlib.pyplot as plt
import os
import sys
import gzip
import keras
import sys
import pickle
import tensorflow as tf

global graph, model
graph = tf.get_default_graph()
from sklearn.model_selection import train_test_split
from keras.preprocessing.text import Tokenizer
from keras.preprocessing.sequence import pad_sequences
from keras.layers import Dense, Input, LSTM, Embedding, Dropout, Activation
from keras.layers import Bidirectional, GlobalMaxPool1D
from keras.models import Model, Sequential
from keras import initializers, regularizers, constraints, optimizers, layers
from keras.callbacks import ModelCheckpoint
from keras.models import Sequential
from keras.layers import Dense
from keras.models import model_from_json

import numpy
import os

os.environ['TF_CPP_MIN_LOG_LEVEL'] = '2'

import json
from pprint import pprint

json_file = open('msg/model.json', 'r')
loaded_model_json = json_file.read()
json_file.close()
loaded_model = model_from_json(loaded_model_json)

loaded_model.load_weights("msg/model.h5")
print("Loaded model from disk")

pickle_in = open("msg/dict.pickle", "rb")
# pickle_in.encoding = 'latin1'
tokenizer = pickle.load(pickle_in, encoding='latin1')
# tokenizer = pickle.load(pickle_in)


with open('msg/data.json') as f:
    data = json.load(f)


def predict_string(com):
    #json_string = json.loads(com)
    comments=com.split('\ufeff,')
    maxlen = 200
    string = ""

    #print(comments)
    for j in range(0, len(comments)-1):
        flag = 0
        s = comments[j],
        #print (s)
        x = tokenizer.texts_to_sequences(s)
        y = pad_sequences(x, maxlen=maxlen)

        with graph.as_default():
            b = loaded_model.predict(y)
        #print (b)
        for i in range(0,6):
            if(b[0][i]>=0.2):
                flag=1

        cnt=0
        if(flag==1):
            for i in range(0,6):
                if(b[0][i]>0.2):
                    cnt=cnt+1

        flag=cnt
        string=string+str(flag)

    return string
