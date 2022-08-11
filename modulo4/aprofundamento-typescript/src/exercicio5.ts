//  Diferênças:
//  - target: "es6" -> Existem outras opções como "es3", "es5", "es2015", "es2016", "es2017", "es2018", "es2019", "es2020", "esnext"
//  - module: "commonjs" -> Existem outras opções como "amd", "system", "umd", "es2015", "esnext"
//  - sourceMap: true -> O sourceMap é um arquivo que permite ao desenvolvedor acompanhar o código fonte de um projeto. E é gerado junto ao arquivo JS na build.
//  - outDir: "./build" -> O outDir é o diretório onde o arquivo JS será gerado. No nosso caso, ele será gerado na pasta build.
//  - rootDir: "./src" -> O rootDir é o diretório onde estão os arquivos de código fonte. No nosso caso, ele será gerado na pasta src.
//  - removeComments: true -> Remove todos os comentários do código fonte.
//  - noImplicitAny: true -> Não permite que o TypeScript crie tipos "any" para variáveis que não foram declaradas. Isso nos força a declarar todas as variáveis nos exercícios.