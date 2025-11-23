# LandGuard Gemini

[![Made with Python](https://img.shields.io/badge/python-3.x-blue.svg)](https://www.python.org/)  
[![Flask](https://img.shields.io/badge/flask-📦-lightgrey.svg)](https://flask.palletsprojects.com/)  
[![YouTube Demo](https://img.shields.io/badge/demo‐video‐red.svg)](https://youtu.be/R8b-GFcKoX)  

LandGuard Gemini uses AI to provide **real-time alerts**, **landslide-risk predictions**, and **location-based weather updates**, helping communities stay safe during natural disasters.  
Built with Python, Flask, and the Gemini model/API.

---

## Features

- Real-time weather monitoring and location-based updates  
- Landslide risk prediction for given terrain or location  
- Alerts and notifications when risk thresholds are met  
- Web interface (built with Flask) for users to input location/parameters and view risk  
- Modular architecture (e.g., separate modules for *WeatherAlert*, *Localizer*, *RiskPrediction*)  

---

## 🎬 Demo  
Watch a live demo of the system in action:  
[YouTube – LandGuard Gemini Demo](https://youtu.be/R8b-GFcKoX)

---
## 🧠 How It Works

LandGuard Gemini combines geolocation, real-time meteorological data, and AI-driven modeling to evaluate landslide vulnerability.

1. **User Inputs Location**  
   The user enters a geographic location (latitude/longitude or a place name).

2. **Location Resolution (Localizer Module)**  
   The Localizer module processes the input and retrieves key geospatial metadata—such as elevation, slope, soil/terrain characteristics, and nearby land features.

3. **Weather Retrieval (WeatherAlert Module)**  
   This module fetches live weather conditions and multi-step forecasts for the selected region.

4. **Risk Modeling (RiskPrediction Module)**  
   The RiskPrediction module—powered by Gemini—analyzes  
   **weather + terrain + historical patterns** to generate a landslide risk score.

5. **Alert Generation**  
   If the score exceeds predefined safety thresholds, the system triggers an on-screen or notification alert.

6. **User Dashboard Output**  
   The interface displays:  
   - current risk level  
   - upcoming weather forecast  
   - risk trend / countdowns  
   - recommended safety actions  

---
