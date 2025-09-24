# Lista para armazenar alturas
alturas = []

# Variáveis para cálculos
maior_altura = 0
menor_altura = float('inf')

soma_altura_masc = 0
qtd_masc = 0
qtd_fem = 0

# Coleta de dados
for i in range(1, 16):
    print(f"\nPessoa {i}:")

    while True:
        try:
            altura = float(input("Digite a altura (em metros): "))
            if altura <= 0:
                print("Altura deve ser positiva.")
                continue
            break
        except ValueError:
            print("Por favor, digite uma altura válida.")

    while True:
        genero = input("Digite o gênero (M para masculino, F para feminino): ").strip().upper()
        if genero not in ['M', 'F']:
            print("Gênero inválido. Digite apenas 'M' ou 'F'.")
        else:
            break

    # Atualiza maior e menor altura
    if altura > maior_altura:
        maior_altura = altura
    if altura < menor_altura:
        menor_altura = altura

    # Processa os dados de acordo com o gênero
    if genero == 'M':
        soma_altura_masc += altura
        qtd_masc += 1
    elif genero == 'F':
        qtd_fem += 1

# Cálculo da média de altura dos homens
media_masc = soma_altura_masc / qtd_masc if qtd_masc > 0 else 0

# Exibe os resultados
print("\n--- RESULTADOS ---")
print(f"Maior altura do grupo: {maior_altura:.2f} m")
print(f"Menor altura do grupo: {menor_altura:.2f} m")
print(f"Média de altura dos homens: {media_masc:.2f} m")
print(f"Número de mulheres: {qtd_fem}")
