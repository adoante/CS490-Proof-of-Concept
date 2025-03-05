## Set up

First create a virtual environment

```bash
python -m venv .venv
```

Activate environment (Windows Powershell)

```bash
.\.venv\Scripts\Activate.ps1
```

Install requirements

```bash
pip install -r requirements
```

Have [node.js](https://nodejs.org/en) installed

Change dir to './react-nextjs-chakra'. Install requirements inside dir `./react-nextjs-chakra`

```bash
npm install
```

## Run app

Start up API

```bash
fastapi dev .\api\api.py
```

Start up frontend 

```bash
npm run dev
```
