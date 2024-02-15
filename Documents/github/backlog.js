import java.util.HashMap;
import java.util.Map;

class User {
    private String username;
    private Map<String, Boolean> permissions;

    public User(String username) {
        this.username = username;
        this.permissions = new HashMap<>();
    }

    public void grantPermission(String permission, boolean value) {
        permissions.put(permission, value);
    }

    public boolean hasPermission(String permission) {
        return permissions.getOrDefault(permission, false);
    }
}

class Invoice {
    // Aquí van las facturas de las compras
}

class Inventory {
    // Aquí debería verse el inventario, falta poner los filtros.
}

public class PermissionExample {
    public static void main(String[] args) {
        // Usuarios
        User user1 = new User("user1");
        User user2 = new User("user2");

        // Permisos para los usuarios
        user1.grantPermission("VIEW_INVOICES", true);
        user1.grantPermission("VIEW_INVENTORY", true);

        user2.grantPermission("VIEW_INVOICES", true);
        user2.grantPermission("VIEW_INVENTORY", false);

        // Visualización
        Invoice invoice = new Invoice();
        Inventory inventory = new Inventory();

        // Donante 1
        if (user1.hasPermission("VIEW_INVOICES")) {
            System.out.println("User1 can view invoices");
            // Lógica para mostrar facturas
        }

        if (user1.hasPermission("VIEW_INVENTORY")) {
            System.out.println("User1 can view inventory");
            // Lógica para mostrar inventario
        }

        if (user2.hasPermission("VIEW_INVOICES")) {
            System.out.println("User2 can view invoices");
            // Lógica para mostrar facturas
        }

        if (user2.hasPermission("VIEW_INVENTORY")) {
            System.out.println("User2 can view inventory");
            // Lógica para mostrar inventario
        }
    }
}
