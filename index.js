var room = HBInit({
    roomName: "X4 DTS/SUPLENTES/FICHAJES GALA", // Nombre de la sala
    maxPlayers: 18, // Máximo de jugadores
    noPlayer: true, // Eliminar al jugador anfitrión
    public: true, // Hacer que la sala sea pública
});

// Evitar que el admin supremo sea expulsado
room.onPlayerLeave = function(player) {
    if (player.name === "『𝘼𝙫𝙞𝙙』") {
        room.sendChat(`${player.name} no puede ser expulsado.`);
        return; // No expulsar al jugador
    }
};
