const validateUsername = (username) => {
  if ((username).trim() === 'admin') {
    return true;
  }

  return false;
};

const validateSubject = (subject) => {
  if ((subject).trim().length >= 8) {
    return true;
  }

  return false;
};

const validateDescription = (description) => {
  if ((description).trim().length >= 25) {
    return true;
  }

  return false;
};

export {
  validateUsername,
  validateSubject,
  validateDescription,
};
