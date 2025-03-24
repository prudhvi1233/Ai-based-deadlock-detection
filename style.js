body {
    font-family: Arial, sans-serif;
    text-align: center;
    background: linear-gradient(120deg, #1e3c72, #2a5298);
    color: white;
    margin: 0;
    padding: 0;
    animation: backgroundAnimation 5s infinite alternate ease-in-out;
}
@keyframes backgroundAnimation {
    0% { background: linear-gradient(120deg, #1e3c72, #2a5298); }
    100% { background: linear-gradient(120deg, #16222A, #3A6073); }
}
.container {
    width: 80%;
    margin: 20px auto;
    padding: 20px;
    background: rgba(255, 255, 255, 0.2);
    border-radius: 10px;
    backdrop-filter: blur(10px);
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.3);
}
textarea {
    width: 100%;
    height: 100px;
    font-size: 16px;
}
button {
    background: #ff9800;
    color: white;
    border: none;
    padding: 10px 20px;
    margin-top: 10px;
    cursor: pointer;
    border-radius: 5px;
    font-size: 16px;
}
button:hover {
    background: #e68900;
}
select {
    padding: 8px;
    font-size: 16px;
}
.gantt-block {
    min-width: 50px;
    padding: 10px;
    margin: 2px;
    background: #ffeb3b;
    color: black;
    border-radius: 5px;
    font-weight: bold;
    animation: fadeIn 0.5s ease-in-out;
}
@keyframes fadeIn {
    from { opacity: 0; transform: scale(0.9); }
    to { opacity: 1; transform: scale(1); }
}
