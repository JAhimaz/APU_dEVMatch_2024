const BloodType = {
  "AB_POSITIVE": {
    "name": "AB+",
    "canReceive": ["AB+", "AB-", "A+", "A-", "B+", "B-", "O+", "O-"],
  },
  "AB_NEGATIVE": {
    "name": "AB-",
    "canReceive": ["AB-", "A-", "B-", "O-"],
  },
  "A_POSITIVE": {
    "name": "A+",
    "canReceive": ["A+", "A-", "O+", "O-"],
  },
  "A_NEGATIVE": {
    "name": "A-",
    "canReceive": ["A-", "O-"],
  },
  "B_POSITIVE": {
    "name": "B+",
    "canReceive": ["B+", "B-", "O+", "O-"],
  },
  "B_NEGATIVE": {
    "name": "B-",
    "canReceive": ["B-", "O-"],
  },
  "O_POSITIVE": {
    "name": "O+",
    "canReceive": ["O+", "O-"],
  },
  "O_NEGATIVE": {
    "name": "O-",
    "canReceive": ["O-"],
  }
}

export default BloodType;