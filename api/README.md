## Rutas. Lo que reciben y lo que devuelven

---

## Flowers

### GET

#### Espera recibir una solicitud GET

#### Devuelve un arreglo con objetos de flores

```javascript
[{...},{...},{...}]
```

### POST

#### Espera recibir por body las propiedades del objeto Flor:

```javascript
{
    "name": "Flor test",
    "image": "www.example.com/flower",
    "info": "www.info.com"
}
```

#### Devuelve el objeto creado

```javascript
{
    "id": "c833e036-38e3-47a6-82b7-30b45c0e781e",
    "name": "Flor test",
    "image": "www.example.com/flower",
    "info": "www.info.com"
},
```

---
