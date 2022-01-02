## Rutas. Lo que reciben y lo que devuelven

---

## Flowers

### GET - http://localhost:3001/flowers/

#### Espera recibir una solicitud GET

#### Devuelve un arreglo con objetos de flores

```javascript
[{...},{...},{...}]
```

### POST - http://localhost:3001/flowers/create

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

---

## Strains

### GET - http://localhost:3001/strains/

#### Espera recibir una solicitud GET

#### Devuelve un arreglo con objetos de strains

```javascript
[{...},{...},{...}]
```

### POST - http://localhost:3001/strains/create-strain

#### Espera recibir por body las propiedades del objeto Strain:

```javascript
{
    "name": "Strain test",
    "url": "www.url.com"
}
```

#### Devuelve el objeto creado

```javascript
{
    "id": "70cfc479-6660-4316-83fe-2ceadfe4a350",
    "name": "Strain test",
    "url": "www.url.com"
}
```

---
