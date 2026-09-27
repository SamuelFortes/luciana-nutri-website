# Briefing de Implementação de Seções - Direção "Mesa Farta"

Este documento detalha as diretrizes de implementação de cada seção da landing page com base na direção visual "Mesa Farta" (foco em gastronomia, calor humano, quebra de ansiedade e tipografia editorial). O conteúdo e a estrutura de CTAs devem permanecer estritamente fiéis ao mapa de conteúdo original.

---

## 1. Header
- **PAPEL NA JORNADA:** Manter navegação acessível e o convite de conversão sempre presente, sem parecer um painel corporativo ou invasivo.
- **LAYOUT:** Estrutura horizontal clássica com itens distribuídos. Alinhamento de logo à esquerda, navegação ao centro e CTA à direita.
- **SEPARAÇÃO:** Não usar gradientes. Quando a página rolar, aplicar mudança sutil de densidade (blur leve) ou uma borda inferior super fina em marrom-expresso quase transparente.
- **TRATAMENTO DE SUPERFÍCIE:** Superfície estritamente plana (flat), descartando o estilo de barra flutuante ou pill/card.
- **IMAGEM:** Apenas o logo.
- **HIERARQUIA TIPOGRÁFICA:** Navegação em sans humanista (Raleway), peso médio (Medium). O título do logo pode usar a serifa (Lora) para assinar a marca.
- **AÇÃO:** CTA "Agende sua Consulta" com destaque moderado, usando formato orgânico (bordas suavemente arredondadas, não cápsula perfeita), em terracota suave.
- **MOTION:** Sem animações de entrada para a navegação em si. A transição de fundo no scroll deve ser imediata ou muito rápida.
- **O QUE MUDA EM RELAÇÃO AO ATUAL:** Perde a frieza de site institucional e os tons pasteis, adotando um fundo que respeita o creme/bege da paleta.

---

## 2. Hero Section
- **PAPEL NA JORNADA:** Recepcionar o visitante como numa cozinha calorosa, desarmar a tensão de "ir ao nutricionista" e inspirar uma relação de prazer com a comida.
- **LAYOUT:** Alinhamento assimétrico. Bloco de texto forte à esquerda, contendo bastante espaço negativo. Foto da Luciana ocupando generosamente a porção direita, estourando os limites típicos de um contêiner rígido.
- **SEPARAÇÃO:** Fundo em creme de aveia. A foto da Luciana deve transbordar intencionalmente a margem inferior (overlap), invadindo ligeiramente a próxima seção para quebrar a linha horizontal dura.
- **TRATAMENTO DE SUPERFÍCIE:** Texto aplicado diretamente sobre o fundo creme. Zero cards. A foto não deve ter sombras pesadas de elevação, mas sim fundir-se ao layout ou usar cortes fluidos.
- **IMAGEM:** Foto da Luciana. Precisa ser lifestyle, luz quente ("golden hour"), sorrindo ou em ação. *(Requer avaliação, veja Pendências).*
- **HIERARQUIA TIPOGRÁFICA:** Título gigante em serifa expressiva, "gordinha" e editorial (Lora), com forte contraste e impacto visual. É o texto mais pesado da seção. Corpo (descrição) em Raleway.
- **AÇÃO:** CTA primário ("Agende sua Consulta") em destaque máximo na página. Cor vermelho-páprica ou terracota vibrante.
- **MOTION:** Revelação suave e progressiva (Scroll Reveal). Elementos nascem visíveis e animam apenas a posição/escala. Teto de 300-400ms. Fim do `opacity: 0` estrutural. O stagger sequencial palavra por palavra do título deve ser avaliado; preferir fade in do bloco se conflitar com acessibilidade.
- **O QUE MUDA EM RELAÇÃO AO ATUAL:** Sai o layout centralizado e engessado com blobs flutuantes abstratos, entra uma composição editorial clássica baseada em tipografia de impacto e foto imersiva.

---

## 3. Sobre Mim (About)
- **PAPEL NA JORNADA:** Humanizar a profissional e reforçar a tese de nutrição com empatia e sem julgamentos.
- **LAYOUT:** Inversão em relação ao Hero. Foto posicionada à esquerda e texto alinhado à direita, criando o movimento de leitura em zigue-zague (Z-pattern).
- **SEPARAÇÃO:** Fundo em bege-cru ou mostarda suave, contrastando com o creme da seção anterior. A invasão da foto do Hero ajuda a mesclar as bordas.
- **TRATAMENTO DE SUPERFÍCIE:** Não aprisionar o parágrafo de biografia em um card. O texto deve fluir livre no fundo. As métricas ("500+", etc.) podem ser organizadas usando espaço em branco e linhas finas (hairlines) em vez de caixas fechadas.
- **IMAGEM:** Retrato humanizado da Luciana, não corporativo.
- **HIERARQUIA TIPOGRÁFICA:** Título da seção em Lora, mantendo peso editorial. O corpo do texto em Raleway. Os números das métricas devem ser o elemento mais pesado aqui, trazendo solidez.
- **AÇÃO:** Descanso ativo. Sem CTAs concorrentes para focar na leitura.
- **MOTION:** Sem contadores de números animados. Mostrar os números finais para não atrasar a leitura, ou animar muito rapidamente se o usuário ainda não tiver scrollado a área.
- **O QUE MUDA EM RELAÇÃO AO ATUAL:** Os blocos de métricas deixam de ser caixas sombreadas isoladas, integrando-se organicamente ao texto biográfico como informações de uma página de revista.

---

## 4. Serviços (Services)
- **PAPEL NA JORNADA:** Apresentar a oferta clínica e os formatos de atendimento como um cardápio claro e apetitoso.
- **LAYOUT:** Título centralizado para ancorar a mudança de ritmo. Itens distribuídos em grade (grid) simétrica de 2 ou 4 colunas.
- **SEPARAÇÃO:** Retorno ao fundo creme de aveia para reforçar a faixa alternada e dar respiro. Separada da seção 'Sobre' por borda de cor direta (hard edge), sem gradientes.
- **TRATAMENTO DE SUPERFÍCIE:** Redução drástica do uso de cards. Cada serviço deve ser um bloco de texto com título e descrição solto no fundo, agrupados por proximidade (Gestalt) e espaçamento farto. Se for estritamente necessário contorno, usar linha finíssima cor marrom-expresso.
- **IMAGEM:** Uso de ícones. Devem adotar traços que remetam a calor (terracota ou marrom) ao invés do atual padrão genérico colorido.
- **HIERARQUIA TIPOGRÁFICA:** Títulos dos serviços em Lora (tamanho médio), descrições em Raleway (regular). Texto predominante na cor marrom-expresso escuro (nunca preto).
- **AÇÃO:** Sem botão. O próprio conteúdo vende o valor.
- **MOTION:** Entram visíveis por padrão. Eliminar o hover exagerado (saltos ou escalas agressivas) que confere ar imaturo.
- **O QUE MUDA EM RELAÇÃO AO ATUAL:** A seção abandona o estilo "dashboard de SaaS" cheio de cards sombreados e passa a se assemelhar à apresentação de seções em um cardápio premium.

---

## 5. Depoimentos (Testimonials)
- **PAPEL NA JORNADA:** Prova social real e ancorada em histórias de transformação felizes e naturais.
- **LAYOUT:** Alinhamento predominantemente centralizado no carrossel, com foco no relato.
- **SEPARAÇÃO:** Fundo sólido bege-cru, criando um contraponto visual aos serviços.
- **TRATAMENTO DE SUPERFÍCIE:** Permissível o uso de cards para emoldurar os depoimentos, porém usando um fundo creme leve (tom sobre tom com o fundo bege) sem sombras artificiais intensas.
- **IMAGEM:** **[PENDÊNCIA CRÍTICA]** As imagens de antes/depois atuais são irreais, escuras e incompatíveis com a mensagem ("colocou o shape"). Precisam ser trocadas por retratos reais ou casos adequados, mostrados de forma respeitosa, ou descartadas, mantendo só o avatar caloroso.
- **HIERARQUIA TIPOGRÁFICA:** Destaque brutal nas aspas e na frase do paciente (usar Lora Italic para trazer voz narrativa). O nome e o resultado secundários, em Raleway Bold.
- **AÇÃO:** Nenhuma.
- **MOTION:** Carrossel horizontal simples. Movimento orgânico.
- **O QUE MUDA EM RELAÇÃO AO ATUAL:** O fim das fotos estranhas e escuras de antes/depois, substituindo por uma moldura narrativa muito mais elegante e focada no conforto da transformação.

---

## 6. Leituras Recomendadas (Tips)
- **PAPEL NA JORNADA:** Posicionar a profissional como curadora de bem-estar e entregar valor sem atrito.
- **LAYOUT:** Grade de colunas alinhadas à esquerda. Ritmo cadenciado e regular.
- **SEPARAÇÃO:** Fundo creme de aveia. Pode usar um traço separador marrom-expresso no topo da seção.
- **TRATAMENTO DE SUPERFÍCIE:** Evitar cards rígidos. Tratar como uma vitrine de blog: foto generosa, título livre abaixo, texto curto. A foto ancora o bloco.
- **IMAGEM:** Imagens dinâmicas vindas do RSS. O crop das imagens deve ser intencional (ex: proporção 3:4 ou 4:5, estilo retrato editorial) se possível, fugindo do 16:9 tradicional corporativo.
- **HIERARQUIA TIPOGRÁFICA:** Título do artigo em Lora (peso médio), garantindo a ligação com o tema de leitura.
- **AÇÃO:** Link textual discreto "Leia no [Fonte]" em cor terracota, com sublinhado clássico. Sem botões espalhafatosos.
- **MOTION:** Hover na imagem (um leve aumento de escala dentro do contêiner oculto).
- **O QUE MUDA EM RELAÇÃO AO ATUAL:** Transição de uma visualização técnica tipo "notícias" para uma curadoria tipo "revista Bon Appétit".

---

## 7. E-book
- **PAPEL NA JORNADA:** Venda do produto digital focado em saúde e prazer, capitalizando a quebra de ansiedade gerada na landing.
- **LAYOUT:** Duas colunas fortes. Mockup visual do e-book à esquerda, texto de pitch e preço à direita.
- **SEPARAÇÃO:** Mudança drástica de fundo. Usar um mostarda profundo ou um terracota denso, para blindar visualmente a área e destacar a oferta frente ao resto do site bege/creme.
- **TRATAMENTO DE SUPERFÍCIE:** O uso forte de cor sólida e o mockup substituem os cards. A superfície é o contraste bruto.
- **IMAGEM:** **[PENDÊNCIA CRÍTICA]** A atual "pilha de livros genérica" não comunica um guia de nutrição. Exige um mockup "Mesa Farta", possivelmente exibindo ingredientes culinários quentes, capa tipográfica editorial, etc.
- **HIERARQUIA TIPOGRÁFICA:** O preço ("Apenas R$ 49,90") deve ter peso massivo. Título secundário em Lora. O elemento mais pesado é o valor e a promessa.
- **AÇÃO:** CTA "Adquirir Agora" com extremo destaque e contraste (ex: botão claro num fundo terracota escuro, ou botão espresso sólido num mostarda), focado 100% em conversão.
- **MOTION:** Sem shimmer glows ou anéis pulsantes excessivos (característicos de info-produtos apelativos agressivos). O foco é o valor premium do e-book.
- **O QUE MUDA EM RELAÇÃO AO ATUAL:** A abordagem sai de um infoproduto tech/marketing agressivo e se torna um produto premium, palpável e elegante.

---

## 8. Contato
- **PAPEL NA JORNADA:** Resgatar leads que leram tudo e agora querem o agendamento real.
- **LAYOUT:** Centralizado para organizar o encerramento visual.
- **SEPARAÇÃO:** Retorno ao fundo bege-cru acolhedor e calmo para finalizar.
- **TRATAMENTO DE SUPERFÍCIE:** Nenhum card. Apenas ícones grandes dispostos lado a lado.
- **IMAGEM:** Ícones sociais e mapa em peso expressivo.
- **HIERARQUIA TIPOGRÁFICA:** Título sutil em Lora, informações complementares em Raleway claro e espaçado.
- **AÇÃO:** Botões para as redes/WhatsApp. Eles devem ter a aparência de "selos" ou emblemas grandes e tocáveis, e não pílulas padrão.
- **MOTION:** Nenhum teto animado. Interações limpas de clique.
- **O QUE MUDA EM RELAÇÃO AO ATUAL:** Os botões ficam mais integrados ao fluxo do que parecendo apêndices aleatórios.

---

## 9. Footer
- **PAPEL NA JORNADA:** Âncora de legalidade e saída fina.
- **LAYOUT:** Faixa horizontal.
- **SEPARAÇÃO:** Linha horizontal de espessura de 1px em marrom-expresso sobre fundo creme de aveia.
- **TRATAMENTO DE SUPERFÍCIE:** Plano simples.
- **IMAGEM:** Ícones minimalistas.
- **HIERARQUIA TIPOGRÁFICA:** Corpo de texto minúsculo, mas ainda legível, em Raleway.
- **AÇÃO:** Ícones com links âncora e externos, passivos.
- **MOTION:** Nenhum.
- **O QUE MUDA EM RELAÇÃO AO ATUAL:** Apenas as cores e a fonte mudam para ornar com a nova direção, eliminando bordas pesadas e priorizando legibilidade.

---

## Pendências de Asset (Para o Cliente)

As seguintes imagens no projeto atual NÃO estão de acordo com a premissa de qualidade ou não existem para a nova versão e devem ser providenciadas:

1. **Imagens da Seção de Depoimentos (Avatares e Antes/Depois):** As imagens atuais (referenciadas nos placeholders) estão escuras, com conotações agressivas de estética de academia ("colocou o shape", poses descontextualizadas de biquíni irreal) ou quebradas. Precisamos de **fotos reais e acolhedoras dos pacientes**, ou remover o componente visual e usar apenas iniciais (AvatarFallback), mantendo foco exclusivo no texto de superação humana.
2. **Mockup do E-Book:** A imagem placeholder de uma pilha de livros misteriosos precisa ser substituída pela **capa real e oficial do e-book da Luciana**. Essa capa deve evocar a direção gastronômica "Mesa Farta", evitando capas com vetores abstratos ou fotos artificiais.
3. **Fotos da Luciana (Hero e Sobre):** As fotos principais (`hero-luciana.jpg` e `about-luciana.jpg`) precisam ser reavaliadas e confirmadas se aderem à estética. Se mostrarem a profissional de jaleco clínico branco, braços cruzados num fundo cinza frio ou hospitalar, **exigirão um novo ensaio ("reshoot")** estilo lifestyle, com luz dourada, sorriso franco e/ou interação com ingredientes reais na cozinha.

---

## Ritmo Geral da Página (A Jornada Visual)

A alternância a seguir garante que o usuário quebre a cegueira de rolagem (banner blindness) por causa das mudanças constantes, mas lógicas, de eixo e cor.

| Seção | Alinhamento Primário | Cor de Fundo (Direção Mesa Farta) |
|---|---|---|
| **1. Header** | Distribuído | Transparente -> Creme de Aveia (no scroll) |
| **2. Hero** | Esquerda | Creme de Aveia (quente e aberto) |
| **3. Sobre** | Direita | Bege-cru ou Mostarda suave (fechamento, acolhimento) |
| **4. Serviços** | Centro (Grid) | Creme de Aveia |
| **5. Depoimentos** | Centro (Carrossel) | Bege-cru |
| **6. Leituras** | Esquerda (Grid) | Creme de Aveia |
| **7. E-book** | Esquerda (Colunas) | Terracota Suave / Mostarda Denso (destaque total) |
| **8. Contato** | Centro | Bege-cru |
| **9. Footer** | Esquerda/Distribuído| Creme de Aveia |
