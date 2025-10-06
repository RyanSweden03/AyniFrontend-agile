import { Component, ElementRef, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

interface Message {
  text: string;
  sender: 'user' | 'bot';
}

@Component({
  selector: 'app-chatbot',
  templateUrl: './chatbot.component.html',
  styleUrls: ['./chatbot.component.css']
})
export class ChatbotComponent {
  chatOpen = false;
  userMessage = '';
  messages: Message[] = [
    { text: '¡Hola! 👋 Soy Ayni Assistant. ¿En qué puedo ayudarte hoy?', sender: 'bot' }
  ];

  hiddenRoutes = ['/signin', '/signup', '/admin'];
  showChat = true;

  @ViewChild('chatMessages') chatMessages!: ElementRef;

  constructor(private http: HttpClient, private router: Router) {
    // Escucha cambios de ruta para ocultar o mostrar el chat
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe((event: any) => {
        this.showChat = !this.hiddenRoutes.includes(event.urlAfterRedirects);
      });
  }

  toggleChat(): void {
    this.chatOpen = !this.chatOpen;
  }

  async sendMessage(): Promise<void> {
    const message = this.userMessage.trim();
    if (!message) return;

    this.messages.push({ text: message, sender: 'user' });
    this.userMessage = '';

    try {
      const response = await this.http
        .post<{ reply: string }>('https://ia-8d46.onrender.com/chat', { message })
        .toPromise();

      this.messages.push({
        text: response?.reply || '🤖 No entendí tu mensaje, intenta nuevamente.',
        sender: 'bot'
      });
    } catch (error) {
      console.error('Error al conectar con el servidor:', error);
      this.messages.push({
        text: '⚠️ No pude conectarme con el servidor. Asegúrate de que la API de IA esté activa.',
        sender: 'bot'
      });
    }

    setTimeout(() => {
      const chatEl = this.chatMessages?.nativeElement;
      if (chatEl) chatEl.scrollTop = chatEl.scrollHeight;
    }, 100);
  }
}
