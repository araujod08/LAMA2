import  {User ,UserRole} from '../../src/model/User'

export const UserMockNormal = new User(
    "idmocknormal",
    "Robervaldo",
    "Robervaldomocknormal@hotmail.com",
    "123456",
    UserRole.NORMAL
)

export const UserMockAdmin = new User(
    "idmockadmin",
    "Fabiula",
    "Fabiulamockadmin@hotmail.com",
    "123456",
    UserRole.ADMIN
)