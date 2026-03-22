from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from api.simulator import YieldPredictionRequest, YieldPredictionResponse, predict_yield
from api.rag import RAGRequest, RAGResponse, process_query
from api.vision import VisionRequest, VisionResponse, detect_objects

app = FastAPI(title="AI Portfolio Backend")

# Allow CORS for Next.js frontend
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"], # For development
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
def read_root():
    return {"message": "Welcome to the AI Portfolio backend"}

@app.post("/api/predict-yield", response_model=YieldPredictionResponse)
def get_yield_prediction(request: YieldPredictionRequest):
    return predict_yield(request)

@app.post("/api/chat", response_model=RAGResponse)
def get_rag_response(request: RAGRequest):
    return process_query(request)

@app.post("/api/detect", response_model=VisionResponse)
def get_vision_detection(request: VisionRequest):
    return detect_objects(request)
