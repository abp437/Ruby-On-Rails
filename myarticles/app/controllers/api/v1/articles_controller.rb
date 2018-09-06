module Api
  module V1
    class ArticlesController < ApplicationController
      def index
        articles = Article.order(created_at: :desc);
        render json: {message: 'Loaded Articles', data: articles},
              status: :ok
      end

      def show
        article = Article.find(params[:id])
        render json: {message: 'Loaded Article', data: article},
              status: :ok
      end

      def create
        article = Article.new(article_params)
        if article.save
          render json: {message: 'Article Created', data: article},
                status: :ok
        else
          render json: {message: 'Article not Created', data: article.erros},
                status: :unprocessable_entity
        end
      end

      def destroy
        article = Article.find(params[:id])
        article.destroy
        render json: {message: 'Deleted Article', data: article},
              status: :ok
      end

      def update
        article = Article.find(params[:id])
        if article.update_attributes(article_params)
          render json: {message: 'Article Updated', data: article},
                status: :ok
        else
          render json: {message: 'Article not Updated', data: article.erros},
                status: :unprocessable_entity
        end
      end

      private

      def article_params
        params.permit(:title, :body)
      end

    end
  end
end
