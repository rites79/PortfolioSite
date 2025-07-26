import { ContactMessage, User } from './db.js';

export class DatabaseStorage {
  async getUser(id) {
    try {
      const user = await User.findById(id);
      return user || undefined;
    } catch (error) {
      console.error('Error getting user:', error);
      return undefined;
    }
  }

  async getUserByUsername(username) {
    try {
      const user = await User.findOne({ username });
      return user || undefined;
    } catch (error) {
      console.error('Error getting user by username:', error);
      return undefined;
    }
  }

  async createUser(userData) {
    try {
      const user = new User(userData);
      await user.save();
      return user;
    } catch (error) {
      console.error('Error creating user:', error);
      throw error;
    }
  }

  async createContactMessage(messageData) {
    try {
      const message = new ContactMessage(messageData);
      await message.save();
      return message;
    } catch (error) {
      console.error('Error creating contact message:', error);
      throw error;
    }
  }

  async getAllContactMessages() {
    try {
      const messages = await ContactMessage.find().sort({ createdAt: -1 });
      return messages;
    } catch (error) {
      console.error('Error getting contact messages:', error);
      throw error;
    }
  }
}

export const storage = new DatabaseStorage();