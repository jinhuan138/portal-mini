# ab-manager-codec 加密解密

## 摘要加密

### MD5

```js
import { MD5 } from '@agree/ab-manager-codec';

let message = '9944781',
    hashData= MD5.hash(message);
```

### SHA1

```js
import { SHA1 } from '@agree/ab-manager-codec';

let message = '9944781',
    hashData= SHA1.hash(message);
```

### SM3

```js
import { SM3 } from '@agree/ab-manager-codec';

let message = '9944781',
    hashData= SM3.hash(message);
```

## 加密解密

### SM2

```js
import { SM2 } from '@agree/ab-manager-codec';

let message = '我是机密信息',
    keypair = SM2.generateKeyPairHex(),
    publicKey = keypair.publicKey,
    privateKey = keypair.privateKey,
    encryptData = SM2.encrypt(message, publicKey),
    decryptData = SM2.decrypt(encryptData, privateKey);
```

### SM4

```js
import { SM4 } from '@agree/ab-manager-codec';

let message = '我是机密信息',
    secretKey = '0123456789abcdeffedcba9876543210',
    encryptData = SM4.encrypt(message, secretKey),
    decryptData = SM4.decrypt(encryptData, secretKey);
```

### DES

```js
import { DES } from '@agree/ab-manager-codec';

let message = '我是机密信息',
    secretKey = '0123456789abcdeffedcba9876543210',
    encryptData = DES.encrypt(message, secretKey),
    decryptData = DES.decrypt(encryptData, secretKey);
```

### TripleDES

```js
import { TripleDES } from '@agree/ab-manager-codec';

let message = '我是机密信息',
    secretKey = '0123456789abcdeffedcba9876543210',
    encryptData = TripleDES.encrypt(message, secretKey),
    decryptData = TripleDES.decrypt(encryptData, secretKey);
```

## 编码解码

### Base64

```js
import { Base64 } from '@agree/ab-manager-codec';

let message = '我是一条消息',
    encodeData = Base64.encode(message),
    decodeData = Base64.decode(encodeData);
```