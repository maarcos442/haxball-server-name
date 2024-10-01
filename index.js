var room = HBInit({
    roomName: "X4 DTS/SUPLENTES/FICHAJES GALA", // Nombre de la sala
    maxPlayers: 18, // Máximo de jugadores
    noPlayer: true, // Eliminar al jugador anfitrión
    public: true, // Hacer que la sala sea pública
});

var BanderaDelHost = 'Argentina'; // Especificar la ubicación como Argentina

room.setDefaultStadium("Big"); // Establecer el estadio predeterminado
room.setScoreLimit(5); // Límite de goles
room.setTimeLimit(0); // Sin límite de tiempo

// Manejar el ingreso de la contraseña para administradores
room.onPlayerChat = function(player, message) {
    if (message.startsWith("!admin ")) {
        if (player.name === "『𝘼𝙫𝙞𝙙』") {
            var targetName = message.split(" ")[1]; // Obtener el nombre del jugador objetivo
            var targetPlayer = room.getPlayer(targetName);
            if (targetPlayer) {
                room.setPlayerAdmin(targetPlayer.id, true); // Asignar admin
                room.sendChat(`${targetName} ha sido nombrado administrador.`);
            } else {
                room.sendChat(`El jugador ${targetName} no está en la sala.`);
            }
        } else {
            room.sendChat(`Solo el admin supremo puede usar este comando.`);
        }
    }
};

// Evitar que el admin supremo sea expulsado
room.onPlayerLeave = function(player) {
    if (player.name === "『𝘼𝙫𝙞𝙙』" || player.adminProtected) {
        room.sendChat(`${player.name} no puede ser expulsado.`);
        return; // No expulsar al jugador
    }
};
