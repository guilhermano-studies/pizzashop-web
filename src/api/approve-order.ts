import { api } from '@/lib/axios'

export interface ApprovedOrderParams {
  orderId: string
}

export async function approveOrder({ orderId }: ApprovedOrderParams) {
  await api.patch(`/orders/${orderId}/approve`)
}
