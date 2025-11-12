# Login Form Project

## Project Overview

Ye project React aur MDB React UI Kit ka use karke **Login & Register form** create karne ke liye hai.  
Form me controlled components, password show/hide aur basic validation implement ki gayi hai.

---

## Complete Features

- **UI Layout:** MDB Container, Row, Col ka use karke left (form) aur right (info panel) design.
- **Controlled Inputs:** Email aur password inputs state ke sath bind kiye.
- **Autofocus on Email:** Page load hone par email input automatically focus.
- **Enter Key Navigation:** Email field me Enter press karne par password field focus ho jata hai.
- **Show/Hide Password:** Password field me eye icon click karne par toggle hota hai.
- **Sign-in Button:** Sign-in button click par `HandleSignin` function trigger hota hai.
- **Forgot Password:** Forgot password link click par `HandleForgot` function call hota hai.
- **Register Button:** Email & password validation implemented; Gmail check, localStorage save aur success alert.
- **Right Info Panel:** Company info aur description maintain kiya.

---

## Current Issues / Pending

- **Home Page Navigation:** Login/Register ke baad home page shift nahi ho raha; link setup pending.
- **Inline Error Messages:** Filhal alerts use ho rahe hain; inline error display baki hai.
- **Optional Improvements:**
  - Password reset ke baad auto focus password field.
  - Validation aur styles ko aur professional banana.

---

## Next Steps / Todo

1. Home page redirect setup after login/register using `useNavigate`.
2. Inline validation errors implement karna alerts ki jagah.
3. Optional: Remember Me checkbox aur loader animation add karna.
4. Routes ke links properly set karna for home page.
