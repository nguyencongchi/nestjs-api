<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg" alt="Donate us"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow" alt="Follow us on Twitter"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Project setup

```bash
$ npm install
```

## Compile and run the project

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Run tests

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Deployment

When you're ready to deploy your NestJS application to production, there are some key steps you can take to ensure it runs as efficiently as possible. Check out the [deployment documentation](https://docs.nestjs.com/deployment) for more information.

If you are looking for a cloud-based platform to deploy your NestJS application, check out [Mau](https://mau.nestjs.com), our official platform for deploying NestJS applications on AWS. Mau makes deployment straightforward and fast, requiring just a few simple steps:

```bash
$ npm install -g mau
$ mau deploy
```

With Mau, you can deploy your application in just a few clicks, allowing you to focus on building features rather than managing infrastructure.

## Resources

Check out a few resources that may come in handy when working with NestJS:

- Visit the [NestJS Documentation](https://docs.nestjs.com) to learn more about the framework.
- For questions and support, please visit our [Discord channel](https://discord.gg/G7Qnnhy).
- To dive deeper and get more hands-on experience, check out our official video [courses](https://courses.nestjs.com/).
- Deploy your application to AWS with the help of [NestJS Mau](https://mau.nestjs.com) in just a few clicks.
- Visualize your application graph and interact with the NestJS application in real-time using [NestJS Devtools](https://devtools.nestjs.com).
- Need help with your project (part-time to full-time)? Check out our official [enterprise support](https://enterprise.nestjs.com).
- To stay in the loop and get updates, follow us on [X](https://x.com/nestframework) and [LinkedIn](https://linkedin.com/company/nestjs).
- Looking for a job, or have a job to offer? Check out our official [Jobs board](https://jobs.nestjs.com).

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Kamil Myśliwiec](https://twitter.com/kammysliwiec)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

Nest is [MIT licensed](https://github.com/nestjs/nest/blob/master/LICENSE).

## Notes Yourself

```bash
# 1. install nestjs and create project:

$ npm i -g @nestjs/cli
$ nest new project-name
```

```bash
# 2. run dev:

npm|yarn run start:dev
```

```bash
# 3. generate module:

nest g module modulename

function: Module trong NestJS đóng vai trò như một container để tổ chức và quản lý các phần khác nhau của ứng dụng
```

```bash
# 4. generate controller:

nest g controller controllername
```

```bash
# 5. generate service:

nest g service servicename --no-spec
```

## docker

```bash
docker compose up dev-db -d

docker ps

docker info

docker logs id
```

## prisma

```bash
https://www.prisma.io/

npx prisma migrate dev

npx prisma migrate dev --name init

npx prisma --help

npx prisma studio: view database

npx prisma db seed --preview-feature
```

## Argon2

```bash
npm install argon2: Password hashing using Argon2 algorithm
```

## class-validator and class class-transformer

```bash
Client Request → JSON Body → ValidationPipe
    |                             |
    v                             v
class-transformer      →  Chuyển thành class instance
    |                             |
    v                             v
class-validator        →  Xác thực dữ liệu trong class
    |                             |
    v                             v
Controller             ←  Dữ liệu đã xác thực (DTO instance)

1. Khả năng kiểm soát và mở rộng dữ liệu dễ dàng hơn.
2. Kết hợp với class-validator để xác thực dữ liệu.
    - class-validator chỉ hoạt động với class instance chứ không với plain object.
3. Lọc bỏ dữ liệu thừa hoặc không mong muốn, giúp bảo mật hơn.
4. Tính nhất quán và an toàn trong việc xử lý dữ liệu.
5. Code rõ ràng, bảo trì dễ dàng và tuân theo OOP.
```

## instance in OOP

```bash
- instance: là một biểu hiện cụ thể của một class

// Tạo một instance từ class
const person1 = new Person('Alice', 25);

Tầm quan trọng của Instance trong OOP
Trừu tượng hóa:
Class cung cấp một khuôn mẫu, còn instance cho phép trừu tượng hóa các đối tượng thực tế trong thế giới thật.

Tái sử dụng mã nguồn:
Tạo nhiều instance từ một class giúp tái sử dụng logic và giảm bớt việc lặp lại mã nguồn.

Đóng gói (Encapsulation):
Instance cung cấp khả năng đóng gói dữ liệu và phương thức, đảm bảo rằng trạng thái của một instance không bị thay đổi ngoài ý muốn.

Kế thừa và Đa hình:
Các instance cũng thừa hưởng hoặc mở rộng các đặc điểm từ class cha, hỗ trợ các khái niệm như kế thừa và đa hình.
```

# jwt (json web token)

```bash
I. Mục đích
Được sử dụng phổ biến trong cơ chế authentication (xác thực) và authorization (ủy quyền).

II. Thành phần
1. Header: Chứa metadata mô tả về token.
{
  "alg": "HS256",   // Thuật toán mã hóa (e.g., HMAC SHA256, RSA, etc.)
  "typ": "JWT"      // Loại token (luôn là "JWT")
}

2. Payload: Chứa dữ liệu (claims) của token. Đây là phần mà ứng dụng lưu trữ các thông tin như user ID, quyền truy cập, hoặc bất kỳ dữ liệu nào cần thiết.
{
  "userId": "1234567890",
  "role": "admin",
  "iat": 1644235600  // Thời điểm tạo token (Unix timestamp)
}

Registered Claims: Là các claims chuẩn theo RFC 7519 như:
iss (issuer): Ai là người phát hành token.
sub (subject): Chủ thể của token.
aud (audience): Đối tượng của token.
exp (expiration): Token hết hạn lúc nào.
iat (issued at): Thời gian token được phát hành.
Public Claims: Dữ liệu công khai do người dùng định nghĩa (e.g., role, userId).
Private Claims: Dữ liệu riêng dùng để giao tiếp giữa các bên.

3. Signature: Phần bảo mật giúp xác thực token không bị thay đổi. Được tạo bằng cách ký vào header và payload bằng thuật toán và một secret key.
signature = HMACSHA256(
  base64UrlEncode(header) + "." + base64UrlEncode(payload),
  secret
)

III. Hoạt động
1. Người dùng (Client) gửi thông tin đăng nhập đến Server:
   - [Client] -> POST /login {username, password}

2. Server kiểm tra thông tin đăng nhập:
   - Nếu thông tin chính xác:
      a. Tạo JWT (gồm Header, Payload, và Signature).
      b. Trả JWT cho Client.
   - Nếu thông tin sai: Trả lỗi 401 (Unauthorized).

3. Client lưu JWT (thường trong Local Storage hoặc Cookie).

4. Client gửi yêu cầu tới Server kèm JWT trong Header:
   - [Client] -> GET /protected-resource
     Header: Authorization: Bearer <JWT>

5. Server kiểm tra JWT:
   a. Giải mã và kiểm tra tính hợp lệ của chữ ký (Signature).
   b. Kiểm tra thời gian hết hạn (Expiration, `exp`).
   c. Nếu hợp lệ: Cho phép truy cập tài nguyên.
   d. Nếu không hợp lệ: Trả lỗi 403 (Forbidden).

6. Server trả về dữ liệu yêu cầu hoặc thông báo lỗi:
   - [Server] -> 200 OK (trả dữ liệu) hoặc 403 Forbidden.
```
