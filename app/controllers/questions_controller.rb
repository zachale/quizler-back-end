class QuestionsController < ApplicationController

  @last_question = nil
  @correct = nil;

  def index
    @ran = 0
  end
  
  def random

    n = Question.count

    # generate a random question based on number of questions
    n = rand(n) + 1
    a = Question.find(n)

    #making sure it doesnt ask the same question again
    while a == @last_question
      n = rand(n)
      a = Question.find(n)
    end

    #make the question text available!
    @question = a.title

    respond_to do |format|
      msg = { :status => "ok", :message => @question }
      format.json  { render :json => msg }
      format.html  { render :html => msg }
    end

  end

  def submit
  
    #find the question submitted
    q = Question.find_by title: params[:question]

    #did it actually find the question?
    exists = !q.nil?

    #if the question exists, and the answers match, hurray!
    if exists and q.answer == params[:answer]
      @correct = true
    else
      @correct = false
    end

    respond_to do |format|
      msg = { :status => "ok", :message => @correct }
      format.json  { render :json => msg }
      format.html  { render :html => msg }
    end

  end

end
