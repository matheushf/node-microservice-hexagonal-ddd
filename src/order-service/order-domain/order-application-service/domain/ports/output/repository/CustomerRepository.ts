import { Customer } from "~/order-service/order-domain/order-domain-core/domain/entity";
import { UUID } from "~/types/types";

export interface CustomerRepository {
  findCustomer(customerId: UUID): Customer | undefined;
}
