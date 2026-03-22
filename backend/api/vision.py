from pydantic import BaseModel
import random
import time

class VisionRequest(BaseModel):
    image_url: str

class BoundingBox(BaseModel):
    x_min: float
    y_min: float
    x_max: float
    y_max: float
    label: str
    confidence: float

class VisionResponse(BaseModel):
    detections: list[BoundingBox]
    inference_time_ms: float

def detect_objects(request: VisionRequest) -> VisionResponse:
    # Simulate processing time
    time.sleep(0.5)
    
    # Generate some fake bounding boxes
    detections = [
        BoundingBox(
            x_min=random.uniform(0.1, 0.4),
            y_min=random.uniform(0.1, 0.4),
            x_max=random.uniform(0.5, 0.9),
            y_max=random.uniform(0.5, 0.9),
            label=random.choice(["Widget", "Component", "Anomaly", "Object"]),
            confidence=round(random.uniform(0.85, 0.99), 2)
        ) for _ in range(random.randint(1, 4))
    ]
    
    return VisionResponse(
        detections=detections,
        inference_time_ms=random.uniform(15.0, 45.0)
    )
