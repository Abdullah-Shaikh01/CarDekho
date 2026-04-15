# 🚗 Car Recommendation Engine

### 🔗 Live URL  
https://car-dekho-chi.vercel.app/

---

## 📌 What did I build and why?

I built a **full-stack car recommendation app** that helps users quickly identify the **top 3 cars** based on their preferences.

Users answer a short questionnaire (budget, type, fuel, priorities), and the system:
- Filters relevant cars  
- Applies **weighted scoring based on priorities**  
- Returns ranked results with **clear reasons**

The focus was on building a **fast, explainable decision system** rather than a black-box solution.

---

## ✂️ What did I deliberately cut?

To meet the 2–3 hour constraint, I skipped:
- Database (used JSON instead)
- Authentication
- Advanced filters (brand, variants, etc.)
- AI-based recommendations
- Complex UI/UX

Goal: **Deliver a clean, working end-to-end MVP**

---

## ⚙️ Tech Stack

- **Frontend:** React (Vite)  
- **Backend:** Node.js + Express  
- **Data:** Local JSON (~30 cars)  
- **Deployment:** Vercel (frontend), Render (backend)  
- **Images:** CDN-based (Unsplash)

Chosen for **speed, simplicity, and quick deployment**

---

## 🤖 AI Usage

**Delegated to AI:**
- Project scaffolding
- Boilerplate code
- Dataset generation
- UI skeletons

**Done manually:**
- Core scoring logic
- Priority → weight mapping
- Filtering + ranking pipeline
- Debugging and integration

---

## 🚀 Where AI helped / struggled

**Helped:**
- Rapid setup and iteration
- Reducing boilerplate effort

**Struggled:**
- Overengineering at times
- Required manual corrections for clean logic and structure

---

## ⏳ If I had 4 more hours

- Integrate MongoDB Atlas for dynamic data
- Use real world data
- Add AI-powered recommendations/explanations  
- Improve dataset depth (features, reviews)  
- Enhance ranking algorithm  
- Better UI + comparison features  

---

## 🏁 Summary

Focused on:
- **Speed of execution**
- **Clear backend logic**
- **Working end-to-end system**

Built as a **practical, explainable MVP within constraints**.