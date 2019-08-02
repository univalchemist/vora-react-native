/*=====================================================
= Validate/Sanitize Email
=====================================================*/

export const validateEmail = email => {
    var re = /^\S+@\S+$/
    return re.test(email);
  }