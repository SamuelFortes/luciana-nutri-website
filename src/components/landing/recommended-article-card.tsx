"use client";

import Image from "next/image";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ExternalLink } from "lucide-react";
import { motion } from "@/components/ui/motion";
import type { RecommendedArticle } from "@/lib/recommended-articles";

export function RecommendedArticleCard({ article }: { article: RecommendedArticle }) {
  return (
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ type: "spring", stiffness: 280, damping: 18 }}
      className="h-full"
    >
      <Card className="group flex h-full flex-col shadow-lg transition-shadow duration-300 hover:shadow-xl">
        <CardHeader className="flex-row items-center gap-3 space-y-0 pb-2">
          <Image
            src={article.faviconUrl}
            alt=""
            width={20}
            height={20}
            className="shrink-0 rounded-sm"
            unoptimized
          />
          <span className="text-xs font-medium text-muted-foreground">
            {article.sourceDomain}
          </span>
        </CardHeader>
        <CardContent className="flex flex-1 flex-col space-y-4">
          <CardTitle className="font-headline text-xl">{article.title}</CardTitle>
          <p className="flex-1 text-muted-foreground">{article.excerpt}</p>
          <motion.div whileHover={{ x: 4 }} transition={{ type: "spring", stiffness: 400 }}>
            <Link
              href={article.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-semibold text-primary"
            >
              Leia no {article.sourceName} <ExternalLink className="h-4 w-4" />
            </Link>
          </motion.div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
