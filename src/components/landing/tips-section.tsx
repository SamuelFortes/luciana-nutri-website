import { FadeIn, StaggerContainer, StaggerItem } from "@/components/ui/motion";
import { getRecommendedArticles } from "@/lib/recommended-articles";
import { RecommendedArticleCard } from "@/components/landing/recommended-article-card";

export async function TipsSection() {
  const articles = await getRecommendedArticles();

  if (articles.length === 0) return null;

  return (
    <section id="dicas" className="w-full bg-background border-t border-border py-20 md:py-28 lg:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <FadeIn className="flex flex-col space-y-4">
          <div className="space-y-4">
            <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl text-foreground">
              Leituras Recomendadas
            </h2>
            <p className="max-w-[900px] font-body text-muted-foreground md:text-xl/relaxed">
              Artigos de fontes confiáveis, selecionados por Luciana — conteúdo de terceiros, não de autoria dela.
            </p>
          </div>
        </FadeIn>

        <StaggerContainer className="mt-16 grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-3">
          {articles.map((article) => (
            <StaggerItem key={article.link}>
              <RecommendedArticleCard article={article} />
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
