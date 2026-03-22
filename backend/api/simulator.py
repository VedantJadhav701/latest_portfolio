from pydantic import BaseModel
import random

class YieldPredictionRequest(BaseModel):
    temperature: float
    time: float
    concentration: float

class YieldPredictionResponse(BaseModel):
    predicted_yield: float
    uncertainty_upper: float
    uncertainty_lower: float
    curve_data: list[float]

def predict_yield(request: YieldPredictionRequest) -> YieldPredictionResponse:
    # Mocking a GPR response
    base_yield = (request.temperature * 0.4) + (request.time * 0.2) + (request.concentration * 0.3)
    base_yield = min(max(base_yield, 0.0), 100.0) # clamp between 0 and 100
    
    uncertainty = random.uniform(2.0, 5.0)
    
    curve_data = []
    for i in range(10):
        # Simulate a curve leading up to the prediction
        curve_val = base_yield * (1 - 2.71 ** (-0.5 * i))
        curve_data.append(round(curve_val, 2))
        
    return YieldPredictionResponse(
        predicted_yield=round(base_yield, 2),
        uncertainty_upper=round(base_yield + uncertainty, 2),
        uncertainty_lower=round(base_yield - uncertainty, 2),
        curve_data=curve_data
    )
