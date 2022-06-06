import java.util.Scanner;

public class Calculator_Switch {
    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);
        while (true) {
            System.out.println("Выберите пункт");
            System.out.println("1. Сложение");
            System.out.println("2. Вычитание");
            System.out.println("3. Умножение");
            System.out.println("4. Деление");
            System.out.println("5. Выйти из программы");
            int person = scan.nextInt();
            switch (person) {
                case 1:
                    System.out.println("Введите первое число");
                    int a = scan.nextInt();
                    System.out.println("Введите второе число");
                    int b = scan.nextInt();
                    System.out.println("Ответ: " + a + " + " + b + " = " + (a + b));
            }
            switch (person) {
                case 2:
                    System.out.println("Введите первое число");
                    int a = scan.nextInt();
                    System.out.println("Введите второе число");
                    int b = scan.nextInt();
                    System.out.println("Ответ: " + a + " - " + b + " = " + (a - b));
            }
            switch (person) {
                case 3:
                    System.out.println("Введите первое число");
                    int a = scan.nextInt();
                    System.out.println("Введите второе число");
                    int b = scan.nextInt();
                    System.out.println("Ответ: " + a + " * " + b + " = " + (a * b));
            }
            switch (person) {
                case 4:
                    System.out.println("Введите первое число");
                    int a = scan.nextInt();
                    System.out.println("Введите второе число");
                    int b = scan.nextInt();
                    if (b == 0) {
                        System.out.println("На ноль делить нельзя");
                    } else {
                        System.out.println("Ответ: " + a + " / " + b + " = " + (a / b));
                    }
            }

            switch (person) {
                case 5:
                    System.out.println("Программа завершена");
                    return;
            }

        }

    }
}
