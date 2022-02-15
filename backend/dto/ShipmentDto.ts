import { CustomerDto } from "./CustomerDto"

export class ShipmentDto {
    "id": string
    "start": string
    "carrier": string
    "status": string
    "customer": CustomerDto
}