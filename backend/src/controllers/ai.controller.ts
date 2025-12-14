import { Request, Response } from 'express';
import { AIService } from '../services/AIService';

export const chat = async (req: Request, res: Response) => {
  try {
    const { message } = req.body;

    if (!message) {
      res.status(400).json({ error: 'Message is required' });
      return;
    }

    // Artificial delay to simulate "thinking"
    await new Promise(resolve => setTimeout(resolve, 500));

    const response = AIService.processQuery(message);

    res.json({ response });
  } catch (error) {
    console.error('AI Chat Error:', error);
    res.status(500).json({ error: 'Failed to process message' });
  }
};
