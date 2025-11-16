# LSL Technology - Backend Integration Contracts

## API Endpoints

### 1. Contact Form Submission
**Endpoint:** `POST /api/contact`

**Request Body:**
```json
{
  "name": "string (required)",
  "email": "string (required, valid email)",
  "company": "string (optional)",
  "message": "string (required)"
}
```

**Response (Success - 201):**
```json
{
  "id": "string (UUID)",
  "name": "string",
  "email": "string",
  "company": "string",
  "message": "string",
  "created_at": "datetime",
  "status": "new"
}
```

**Response (Error - 400):**
```json
{
  "detail": "Validation error message"
}
```

### 2. Get All Contact Submissions (Optional - Admin)
**Endpoint:** `GET /api/contact`

**Response (Success - 200):**
```json
[
  {
    "id": "string",
    "name": "string",
    "email": "string",
    "company": "string",
    "message": "string",
    "created_at": "datetime",
    "status": "new"
  }
]
```

## Database Schema

### ContactSubmission Collection
```
{
  "_id": ObjectId,
  "id": string (UUID),
  "name": string,
  "email": string,
  "company": string (optional),
  "message": string,
  "created_at": datetime,
  "status": string (default: "new")
}
```

## Frontend Integration Changes

### Files to Update:
1. **Contact.jsx**
   - Remove mock submission logic
   - Add axios call to `POST /api/contact`
   - Handle loading states
   - Handle success/error responses
   - Display appropriate messages

### Mock Data to Remove:
- `mockContactInfo` will be replaced with environment variable or hardcoded email
- Form submission will call actual backend API instead of console.log

## Backend Implementation Details

### New Files:
1. **server.py updates**
   - Add ContactSubmission Pydantic model
   - Add POST /api/contact endpoint
   - Add GET /api/contact endpoint
   - Add email validation
   - Add error handling

### Validation Rules:
- Name: Required, min 2 characters
- Email: Required, valid email format
- Company: Optional
- Message: Required, min 10 characters

## Integration Flow

1. User fills contact form
2. Frontend validates inputs
3. Frontend sends POST to /api/contact
4. Backend validates data
5. Backend stores in MongoDB
6. Backend returns success response with ID
7. Frontend shows success message
8. Form resets after 3 seconds
