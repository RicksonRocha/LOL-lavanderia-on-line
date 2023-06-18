import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pedido } from 'src/app/shared/models/pedido.model';

@Injectable({
  providedIn: 'root',
})
export class PedidoService {
  private BASE_URL = 'http://localhost:3000/pedidos/';
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  constructor(private httpClient: HttpClient) {}

  listarTodos(): Observable<Pedido[]> {
    return this.httpClient.get<Pedido[]>(this.BASE_URL, this.httpOptions);
  }

  remover(id: number): Observable<Pedido> {
    return this.httpClient.delete<Pedido>(this.BASE_URL + id, this.httpOptions);
  }

  inserir(pedido: Pedido): Observable<Pedido> {
    return this.httpClient.post<Pedido>(this.BASE_URL, JSON.stringify(pedido), this.httpOptions);
  }

  alterar(pedido: Pedido): Observable<Pedido> {
    return this.httpClient.put<Pedido>(
      this.BASE_URL + pedido.id,
      JSON.stringify(pedido),
      this.httpOptions
    );
  }
}