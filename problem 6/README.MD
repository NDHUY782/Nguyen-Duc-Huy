# 1.Create a documentation for this module

## Score Board API Module

**Overview**

```
The Score Board API module is responsible for managing user scores and updating the score board in real-time. It provides endpoints for increasing user scores and fetching the top 10 users' scores.

```

**Flow of Execution**

```
To use the scoreboard update module, you need to send an API with the following parameters:
```

- **Increase Score Endpoint**

  - **Endpoint**: /api/score/increase
  - **Method**: POST

  ```
  "userId": "string" // Unique identifier of the user whose    score needs to be increased
  ```

  - **Response**:
    - 200 OK: Successful score increase.
    - 401 Unauthorized: If the user is not authorized to increase the score.

- **Get Top Scores Endpoint**
  - **Endpoint**: /api/score/top
  - **Method**: GET
  - **Response**
  ```{
  "userId": "string", // Unique identifier of the user
  "score": "number" // User's score}
  ```

# 2. Diagram

## In folder Diagram

# 3. Additional comments

- **User Authentication**: Ensure that only authorized users can send API calls to update scores.

- **Action Notes**: Provide a detailed description so users can use the module effectively.

- **Safety Checks**: Perform input checks to prevent malicious or invalid API calls from outside.

# 4. Specification

- **API URL**: [ Update-Scores]
- **Method**: POST
- **Parameters**:
  ```
  "userID (string)": ID of the user whose score needs to be updated.
  "action (string)": Action to take to increase score.
  ```
- **Authentication**: Use a token or similar authentication mechanism to ensure the security of API calls.
