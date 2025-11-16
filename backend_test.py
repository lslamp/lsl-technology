#!/usr/bin/env python3
"""
Backend API Testing for LSL Technology Contact Form
Tests POST /api/contact and GET /api/contact endpoints
"""

import requests
import json
import sys
from datetime import datetime

# Get backend URL from environment
BACKEND_URL = "https://netops-support.preview.emergentagent.com/api"

def test_post_contact_valid_all_fields():
    """Test POST /api/contact with all fields provided"""
    print("\n=== Testing POST /api/contact with all fields ===")
    
    payload = {
        "name": "John Smith",
        "email": "john.smith@techcorp.com",
        "company": "TechCorp Solutions",
        "message": "We need help with network monitoring setup for our growing infrastructure."
    }
    
    try:
        response = requests.post(f"{BACKEND_URL}/contact", json=payload, timeout=10)
        print(f"Status Code: {response.status_code}")
        print(f"Response: {response.text}")
        
        if response.status_code in [200, 201]:
            data = response.json()
            required_fields = ['id', 'name', 'email', 'company', 'message', 'created_at', 'status']
            missing_fields = [field for field in required_fields if field not in data]
            
            if missing_fields:
                print(f"❌ FAIL: Missing fields in response: {missing_fields}")
                return False
            
            if data['status'] != 'new':
                print(f"❌ FAIL: Expected status 'new', got '{data['status']}'")
                return False
                
            print("✅ PASS: Valid submission with all fields successful")
            return True
        else:
            print(f"❌ FAIL: Expected 200/201, got {response.status_code}")
            return False
            
    except Exception as e:
        print(f"❌ FAIL: Exception occurred: {str(e)}")
        return False

def test_post_contact_valid_without_company():
    """Test POST /api/contact without optional company field"""
    print("\n=== Testing POST /api/contact without company field ===")
    
    payload = {
        "name": "Sarah Johnson",
        "email": "sarah.johnson@startup.io",
        "message": "Looking for infrastructure consultation for our new startup. Need advice on scalable monitoring solutions."
    }
    
    try:
        response = requests.post(f"{BACKEND_URL}/contact", json=payload, timeout=10)
        print(f"Status Code: {response.status_code}")
        print(f"Response: {response.text}")
        
        if response.status_code in [200, 201]:
            data = response.json()
            if 'company' in data and data['company'] == "":
                print("✅ PASS: Valid submission without company field successful")
                return True
            else:
                print(f"❌ FAIL: Company field handling issue: {data.get('company', 'missing')}")
                return False
        else:
            print(f"❌ FAIL: Expected 200/201, got {response.status_code}")
            return False
            
    except Exception as e:
        print(f"❌ FAIL: Exception occurred: {str(e)}")
        return False

def test_post_contact_invalid_email():
    """Test POST /api/contact with invalid email format"""
    print("\n=== Testing POST /api/contact with invalid email ===")
    
    payload = {
        "name": "Mike Wilson",
        "email": "invalid-email-format",
        "company": "Wilson Enterprises",
        "message": "Need help with network setup and monitoring implementation."
    }
    
    try:
        response = requests.post(f"{BACKEND_URL}/contact", json=payload, timeout=10)
        print(f"Status Code: {response.status_code}")
        print(f"Response: {response.text}")
        
        if response.status_code in [400, 422]:
            print("✅ PASS: Invalid email correctly rejected")
            return True
        else:
            print(f"❌ FAIL: Expected 400/422 for invalid email, got {response.status_code}")
            return False
            
    except Exception as e:
        print(f"❌ FAIL: Exception occurred: {str(e)}")
        return False

def test_post_contact_name_too_short():
    """Test POST /api/contact with name less than 2 characters"""
    print("\n=== Testing POST /api/contact with short name ===")
    
    payload = {
        "name": "A",
        "email": "a@company.com",
        "company": "A Corp",
        "message": "This is a test message that is longer than 10 characters."
    }
    
    try:
        response = requests.post(f"{BACKEND_URL}/contact", json=payload, timeout=10)
        print(f"Status Code: {response.status_code}")
        print(f"Response: {response.text}")
        
        if response.status_code in [400, 422]:
            print("✅ PASS: Short name correctly rejected")
            return True
        else:
            print(f"❌ FAIL: Expected 400/422 for short name, got {response.status_code}")
            return False
            
    except Exception as e:
        print(f"❌ FAIL: Exception occurred: {str(e)}")
        return False

def test_post_contact_message_too_short():
    """Test POST /api/contact with message less than 10 characters"""
    print("\n=== Testing POST /api/contact with short message ===")
    
    payload = {
        "name": "David Brown",
        "email": "david@company.com",
        "company": "Brown Industries",
        "message": "Short"
    }
    
    try:
        response = requests.post(f"{BACKEND_URL}/contact", json=payload, timeout=10)
        print(f"Status Code: {response.status_code}")
        print(f"Response: {response.text}")
        
        if response.status_code in [400, 422]:
            print("✅ PASS: Short message correctly rejected")
            return True
        else:
            print(f"❌ FAIL: Expected 400/422 for short message, got {response.status_code}")
            return False
            
    except Exception as e:
        print(f"❌ FAIL: Exception occurred: {str(e)}")
        return False

def test_post_contact_missing_required_fields():
    """Test POST /api/contact with missing required fields"""
    print("\n=== Testing POST /api/contact with missing required fields ===")
    
    # Test missing name
    payload = {
        "email": "test@company.com",
        "message": "This message is long enough to pass validation."
    }
    
    try:
        response = requests.post(f"{BACKEND_URL}/contact", json=payload, timeout=10)
        print(f"Missing name - Status Code: {response.status_code}")
        print(f"Response: {response.text}")
        
        if response.status_code not in [400, 422]:
            print(f"❌ FAIL: Expected 400/422 for missing name, got {response.status_code}")
            return False
            
    except Exception as e:
        print(f"❌ FAIL: Exception occurred: {str(e)}")
        return False
    
    # Test missing email
    payload = {
        "name": "Test User",
        "message": "This message is long enough to pass validation."
    }
    
    try:
        response = requests.post(f"{BACKEND_URL}/contact", json=payload, timeout=10)
        print(f"Missing email - Status Code: {response.status_code}")
        print(f"Response: {response.text}")
        
        if response.status_code not in [400, 422]:
            print(f"❌ FAIL: Expected 400/422 for missing email, got {response.status_code}")
            return False
            
    except Exception as e:
        print(f"❌ FAIL: Exception occurred: {str(e)}")
        return False
    
    # Test missing message
    payload = {
        "name": "Test User",
        "email": "test@company.com"
    }
    
    try:
        response = requests.post(f"{BACKEND_URL}/contact", json=payload, timeout=10)
        print(f"Missing message - Status Code: {response.status_code}")
        print(f"Response: {response.text}")
        
        if response.status_code not in [400, 422]:
            print(f"❌ FAIL: Expected 400/422 for missing message, got {response.status_code}")
            return False
        
        print("✅ PASS: Missing required fields correctly rejected")
        return True
            
    except Exception as e:
        print(f"❌ FAIL: Exception occurred: {str(e)}")
        return False

def test_get_contact_submissions():
    """Test GET /api/contact endpoint"""
    print("\n=== Testing GET /api/contact ===")
    
    try:
        response = requests.get(f"{BACKEND_URL}/contact", timeout=10)
        print(f"Status Code: {response.status_code}")
        print(f"Response: {response.text}")
        
        if response.status_code == 200:
            data = response.json()
            if isinstance(data, list):
                print(f"✅ PASS: GET /api/contact returned list with {len(data)} submissions")
                
                # Check if submissions are sorted by created_at descending
                if len(data) > 1:
                    timestamps = [item.get('created_at') for item in data if 'created_at' in item]
                    if len(timestamps) > 1:
                        # Check if sorted descending
                        is_sorted = all(timestamps[i] >= timestamps[i+1] for i in range(len(timestamps)-1))
                        if is_sorted:
                            print("✅ PASS: Submissions correctly sorted by created_at descending")
                        else:
                            print("❌ FAIL: Submissions not sorted by created_at descending")
                            return False
                
                return True
            else:
                print(f"❌ FAIL: Expected list, got {type(data)}")
                return False
        else:
            print(f"❌ FAIL: Expected 200, got {response.status_code}")
            return False
            
    except Exception as e:
        print(f"❌ FAIL: Exception occurred: {str(e)}")
        return False

def main():
    """Run all tests"""
    print("🚀 Starting LSL Technology Contact Form Backend API Tests")
    print(f"Backend URL: {BACKEND_URL}")
    
    tests = [
        test_post_contact_valid_all_fields,
        test_post_contact_valid_without_company,
        test_post_contact_invalid_email,
        test_post_contact_name_too_short,
        test_post_contact_message_too_short,
        test_post_contact_missing_required_fields,
        test_get_contact_submissions
    ]
    
    passed = 0
    failed = 0
    
    for test in tests:
        try:
            if test():
                passed += 1
            else:
                failed += 1
        except Exception as e:
            print(f"❌ Test {test.__name__} failed with exception: {str(e)}")
            failed += 1
    
    print(f"\n📊 Test Results:")
    print(f"✅ Passed: {passed}")
    print(f"❌ Failed: {failed}")
    print(f"📈 Success Rate: {(passed/(passed+failed)*100):.1f}%")
    
    if failed > 0:
        print("\n⚠️  Some tests failed. Check the output above for details.")
        sys.exit(1)
    else:
        print("\n🎉 All tests passed!")
        sys.exit(0)

if __name__ == "__main__":
    main()