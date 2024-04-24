from flask import Flask, request, jsonify
import time
import random
app = Flask(__name__)

@app.route('/', methods=['GET'])
def api_health_checker():
    response_data = {
        "success": True,
        "message": "Python flask backend is up and running!"
    }    
    return jsonify(response_data), 200


@app.route('/llm_reply', methods=['POST'])
def get_resource():
    json_data = request.json

    query = json_data.get('query')
    file_names = json_data.get('filenames')
    random_messages = ["Hello!","How are you?","Good morning!","Have a nice day!","Welcome!","Greetings!","Nice to meet you!","What's up?","How's it going?","Cheers!","Good luck!","Take care!","Stay safe!","Best wishes!","Enjoy!","See you later!", "Bye!","Farewell!","Keep smiling!","You're awesome!"]

    
    response_data = {
        "success": True,
        "query": query,
        "filename": file_names,
        "message": random.choice(random_messages)
    }

    # call the LLM inference thing here. For now, I will sleep for 1 second
    time.sleep(1)

    return jsonify(response_data), 200


if __name__ == '__main__':
    app.run(debug=True)