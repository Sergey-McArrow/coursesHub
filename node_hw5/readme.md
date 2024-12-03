# Test GET request without Authorization header

curl http://localhost:3000

# Test PUT request with Authorization header

curl -X PUT -H "Authorization: Bearer token" http://localhost:3000

# Test DELETE request with Authorization header

curl -X DELETE -H "Authorization: Bearer token" http://localhost:3000
