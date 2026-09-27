"use client";

import Image from "next/image";
import Link from "next/link";
import { ExternalLink } from "lucide-react";
import { motion } from "@/components/ui/motion";
import type { RecommendedArticle } from "@/lib/recommended-articles";

export function RecommendedArticleCard({ article }: { article: RecommendedArticle }) {
  return (
    <div className="group flex h-full flex-col space-y-5">
      <div className="flex items-center gap-3">
        <Image
          src={article.faviconUrl}
          alt=""
          width={24}
          height={24}
          className="shrink-0 rounded-sm"
          unoptimized
        />
        <span className="font-body text-sm font-medium text-muted-foreground">
          {article.sourceDomain}
        </span>
      </div>
      <div className="flex flex-1 flex-col space-y-3">
        <h3 className="font-headline text-2xl font-bold leading-snug text-foreground transition-colors group-hover:text-primary">
          {article.title}
        </h3>
        <p className="font-body flex-1 text-lg/relaxed text-muted-foreground">
          {article.excerpt}
        </p>
        <motion.div whileHover={{ x: 4 }} transition={{ type: "spring", stiffness: 400 }} className="pt-2">
          <Link
            href={article.link}
            target="_blank"
            rel="noopener noreferrer"
            className="font-body inline-flex items-center gap-2 text-base font-bold text-primary underline-offset-4 hover:underline decoration-2"
          >
            Leia no {article.sourceName} <ExternalLink className="h-4 w-4" />
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
