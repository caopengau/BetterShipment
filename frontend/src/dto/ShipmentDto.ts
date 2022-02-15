import { CustomerDto } from "./CustomerDto"

export type ShipmentDto = {
    "id": string
    "start": string
    "carrier": string
    "status": string
    "customer": CustomerDto
}