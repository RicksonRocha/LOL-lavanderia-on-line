export interface ITableHeads {
  title: string;
}

export const TABLEHEADS: ITableHeads[] = [
  { title: 'Número do pedido' },
  { title: 'Data' },
  { title: 'Prazo' },
  { title: 'Status' },
  { title: 'Valor' },
  { title: 'Ações' },
];

export type ModalType = 'RECOLHIDO' | 'AGUARDANDO PAGAMENTO' | 'FINALIZADO';
