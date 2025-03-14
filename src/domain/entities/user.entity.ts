enum ROL{
    ADMIN,
    LABORATORISTA,
    CLIENTE,
}

export class UserEntity {
    constructor(
        public id_user: string,
        public nombre: string,
        public email: string,
        public numero_telefono: number,
        public rol: ROL,
        public password: string,
        public eliminado: boolean,
        public lote: string[],
        public muestras: string[],
        public pedido: string[],
        public pedido_asignado: string[],
        public fecha_registro: Date,
        public fecha_editado?: Date,
    ) { }

    public static fromObject(obj: { [key: string]: any }): UserEntity {
        const { id_user, nombre, email, numero_telefono, rol, password, eliminado, lote, muestras, pedido, pedido_asignado, fecha_registro, fecha_editado } = obj;

        if (!id_user) throw new Error('id_user property is required');
        if (!nombre) throw new Error('nombre property is required');
        if (!email) throw new Error('email property is required');
        if (!numero_telefono) throw new Error('numero_telefono property is required');
        if (rol === undefined || rol === null) throw new Error('rol property is required');
        if (!password) throw new Error('password property is required');
        if (eliminado === undefined || eliminado === null) throw new Error('eliminado property is required');
        if (!fecha_registro) throw new Error('fecha_registro property is required');

        const newFechaRegistro = new Date(fecha_registro);
        if (isNaN(newFechaRegistro.getTime())) {
            throw new Error('fecha_registro is not a valid date');
        }

        let newFechaEditado;
        if (fecha_editado) {
            newFechaEditado = new Date(fecha_editado);
            if (isNaN(newFechaEditado.getTime())) {
                throw new Error('fecha_editado is not a valid date');
            }
        }

        return new UserEntity(
            id_user,
            nombre,
            email,
            numero_telefono,
            rol,
            password,
            eliminado,
            Array.isArray(lote) ? lote : [],
            Array.isArray(muestras) ? muestras : [],
            Array.isArray(pedido) ? pedido : [],
            Array.isArray(pedido_asignado) ? pedido_asignado : [],
            newFechaRegistro,
            newFechaEditado
        );
    }
}
